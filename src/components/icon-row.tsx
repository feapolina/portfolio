import { NodeIcon } from "../assets/icons/node-icon";
import { PostgresIcon } from "../assets/icons/postgres-icon";
import { PrismaIcon } from "../assets/icons/prisma-icon";
import { ReactIcon } from "../assets/icons/react-icon";
import { TailwindIcon } from "../assets/icons/tailwind-icon";
import { TypescriptIcon } from "../assets/icons/typescript-icon";

export function IconRow() {
  return (
    <div className="flex space-x-3 w-64 md:w-auto sm:">
      <TypescriptIcon width={42} height={42} />
      <NodeIcon width={42} height={42} />
      <PostgresIcon width={42} height={42} />
      <PrismaIcon width={42} height={42} />
      <ReactIcon width={42} height={42} />
      <TailwindIcon width={42} height={42} />
    </div>
  );
}
