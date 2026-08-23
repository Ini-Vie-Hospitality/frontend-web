export function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-[clamp(1.15rem,1.34vw,1.55rem)] leading-none text-[#e9dfcf] [font-family:Georgia,serif] after:mt-[15px] after:block after:h-px after:w-[25px] after:bg-[#e06a0b]">
      {children}
    </h3>
  );
}
