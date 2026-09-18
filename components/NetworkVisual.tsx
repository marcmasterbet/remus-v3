type Props = {
  variant?: "orb" | "limes";
};

export default function NetworkVisual({ variant = "orb" }: Props) {
  return (
    <div className={`network-visual ${variant === "limes" ? "network-limes" : ""}`} aria-hidden="true">
      <div className="network-core" />
      <div className="network-ring ring-1" />
      <div className="network-ring ring-2" />
      <div className="network-ring ring-3" />
      <div className="network-ring ring-4" />
      <div className="network-stars" />
    </div>
  );
}
