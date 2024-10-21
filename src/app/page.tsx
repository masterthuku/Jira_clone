
import { Button } from "@/components/ui/button";



export default function Home() {
  return (
    <div className="flex gap-4" >
      <Button variant={"primary"}>Primary</Button>
      <Button variant={"secondary"} >secondary</Button>
      <Button variant={"destructive"} >Destructive</Button>
      <Button variant={"ghost"}>Ghost</Button>
      <Button variant={"outline"}>outline</Button>
      <Button variant={"muted"}>muted</Button>
      <Button variant={"teritary"}>teritary</Button>
    </div>
  );
}
