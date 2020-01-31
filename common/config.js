module.exports = {
  jwt: {
    private: process.env.JWT_PRIVATE,
    public: process.env.JWT_PUBLIC,
    passphrase: process.env.JWT_PASSPHRASE
  }
}
