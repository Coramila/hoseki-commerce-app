type StatusHandlerProps = {
  isLoading: boolean;
  error: string | null;
  children: React.ReactNode;
};

const StatusHandler = ({ isLoading, error, children }: StatusHandlerProps) => {
  if (isLoading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return <>{children}</>;
};

export default StatusHandler;