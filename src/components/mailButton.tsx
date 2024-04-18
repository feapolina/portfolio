import { Button } from "@/components/ui/button";

interface PropsButton {
  children: string;
}

export function ButtonOutline(props: PropsButton) {
  return (
    <Button className="bg-emerald-600 hover:bg-emerald-800">
      {props.children}
    </Button>
  );
}
