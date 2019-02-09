module.exports = {
  getStatus(forceFailure) {
    if (forceFailure) {
      throw new Error('Forced Failure');
    }

    return Promise.resolve({
      status: "Ok"
    });
  }
}