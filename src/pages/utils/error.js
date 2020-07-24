export default (errorCode) => {
  const errorResult =
    errorCode === "auth/email-already-exists" ||
    errorCode === "auth/email-already-in-use"
      ? (errorCode = "O e-mail fornecido já possui cadastro. ")
      : errorCode === "auth/invalid-email"
      ? (errorCode = "E-mail inválido. Favor inserir um e-mail válido.")
      : errorCode === "auth/wrong-password"
      ? (errorCode = "Senha incorreta.")
      : errorCode === "auth/user-not-found"
      ? (errorCode = "E-mail não cadastrado.")
      : errorCode === "auth/weak-password"
      ? (errorCode = "A senha deve ter mais de seis caracteres.")
      : "";
  return errorResult;
};
