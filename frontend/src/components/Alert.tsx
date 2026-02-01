type AlertProps = {
  message: string;
  type?: "error" | "success" | "warning" | "info";
};

export default function Alert({ message, type = "info" }: AlertProps) {
  return (
    <div className={`alert alert-${type}`}>
      {message}
    </div>
  );
}
