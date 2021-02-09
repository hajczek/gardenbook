const express = require('express');
const router = express.Router();
const {
  getUsers,
  getUserDetails,
  addUser,
  editUserDetails,
  deleteUser,
} = require('../controllers/users');

router.route('/').get(getUsers).post(addUser);
router
  .route('/:id')
  .get(getUserDetails)
  .put(editUserDetails)
  .delete(deleteUser);

module.exports = router;
