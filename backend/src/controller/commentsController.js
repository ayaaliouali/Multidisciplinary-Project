
import Comment from '../models/Comment.js';
import { validationResult } from'express-validator';


export const createComment = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { product, rating, comment } = req.body;
    
    const newComment = await Comment.create({
      product,
      user: req.user.id,
      rating,
      comment
    });

    res.status(201).json({
      success: true,
      data: newComment
    });
  } catch (err) {
    next(err);
  }
};


export const getProductComments = async (req, res, next) => {
  try {
    const comments = await Comment.find({ product: req.params.productId })
      .sort({ createdAt: -1 })
      .populate('user', 'name email');

    res.status(200).json({
      success: true,
      count: comments.length,
      data: comments
    });
  } catch (err) {
    next(err);
  }
};


export const updateComment = async (req, res, next) => {
  try {
    let comment = await Comment.findById(req.params.id);

    if (!comment) {
      return res.status(404).json({
        success: false,
        error: 'Comment not found'
      });
    }

    
    if (comment.user.toString() !== req.user.id) {
      return res.status(401).json({
        success: false,
        error: 'Not authorized to update this comment'
      });
    }

    comment = await Comment.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    res.status(200).json({
      success: true,
      data: comment
    });
  } catch (err) {
    next(err);
  }
};


export const deleteComment = async (req, res, next) => {
  try {
    const comment = await Comment.findById(req.params.id);

    if (!comment) {
      return res.status(404).json({
        success: false,
        error: 'Comment not found'
      });
    }

    
    if (comment.user.toString() !== req.user.id) {
      return res.status(401).json({
        success: false,
        error: 'Not authorized to delete this comment'
      });
    }

    await comment.remove();

    res.status(200).json({
      success: true,
      data: {}
    });
  } catch (err) {
    next(err);
  }
};


export const getAverageRating = async (req, res, next) => {
  try {
    const stats = await Comment.aggregate([
      {
        $match: { product: mongoose.Types.ObjectId(req.params.productId) }
      },
      {
        $group: {
          _id: '$product',
          averageRating: { $avg: '$rating' },
          totalRatings: { $sum: 1 }
        }
      }
    ]);

    if (stats.length === 0) {
      return res.status(200).json({
        success: true,
        data: {
          averageRating: 0,
          totalRatings: 0
        }
      });
    }

    res.status(200).json({
      success: true,
      data: stats[0]
    });
  } catch (err) {
    next(err);
}
};
