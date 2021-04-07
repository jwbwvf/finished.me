// todo look at moving these to the db
module.exports = {
  jwt: {
    private: process.env.JWT_PRIVATE,
    public: process.env.JWT_PUBLIC,
    passphrase: process.env.JWT_PASSPHRASE
  },
  keyPath: process.env.KEY_PATH,
  certPath: process.env.CERT_PATH
}
