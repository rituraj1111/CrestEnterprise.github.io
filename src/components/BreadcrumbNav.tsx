import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Home } from "lucide-react";
interface BreadcrumbNavProps {
  items: Array<{
    label: string;
    href?: string;
    current?: boolean;
  }>;
}
const BreadcrumbNav = ({
  items
}: BreadcrumbNavProps) => {
  return;
};
export default BreadcrumbNav;