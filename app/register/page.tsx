export default function RegisterPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] max-w-md mx-auto">
      <h1 className="text-3xl font-light text-[var(--text-primary)] mb-8 text-center">Criar Conta</h1>
      <form className="w-full space-y-4">
        <input type="text" placeholder="Nome de usuário" className="input-base" />
        <input type="email" placeholder="Email" className="input-base" />
        <input type="password" placeholder="Senha" className="input-base" />
        <button type="submit" className="btn-base w-full">Registrar</button>
      </form>
      <p className="mt-6 text-sm text-muted text-center">
        Já possui conta? <a href="/login" className="text-copper hover:underline">Entrar</a>
      </p>
    </div>
  );
}
