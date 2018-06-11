// increment
function increment(index){
  return {
    type: 'INCREMENT_LIKES',
    index
  }
}

// addComment
function addComment(postId, author, comment) {
  return {
    type: 'ADD_COMMENT',
    postId,
    author,
    comment
  }
}

// removeComment
function removeComment(postId, i){
  return {
    type: 'REMOVE_COMMENT',
    postId,
    i
  }
}
