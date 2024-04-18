import { Badge } from "@/components/ui/badge";

interface propsBadge {
  children: string;
}

export function BadgeOutline(props: propsBadge) {
  return <Badge variant="outline" className="text-slate-100 border-gray-700">{props.children}</Badge>;
}
