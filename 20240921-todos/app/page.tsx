import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@radix-ui/react-label";
import { Plus } from "lucide-react";

export default async function TodosPage() {
  return (
    // Container.
    <div className="max-w-2xl m-auto">
      {/* Header */}
      <header className="flex">
        <h1 className="mx-auto my-2 text-4xl">Todos</h1>
      </header>
      {/* Main */}
      {/* To add new todo form */}
      <main className="space-y-5">
        <div className="flex space-x-2">
          <Input placeholder="What do you do?" />
          <Button size="icon">
            <Plus />
          </Button>
        </div>

        {/* Todo list */}
        <ul className="space-y-2">
          {/* Todo list item */}
          <li className="space-x-2">
            <Checkbox id={"todo-list-item-1"} className="border-white" />
            <Label htmlFor={"todo-list-item-1"}>Todo list item.</Label>
          </li>
          <li className="space-x-2">
            <Checkbox id={"todo-list-item-2"} className="border-white" />
            <Label htmlFor={"todo-list-item-2"}>日本語</Label>
          </li>
        </ul>

        {/* Todo footer */}
        <div className="flex items-center justify-between">
          {/* Count selected items. */}
          <div className="flex-auto w-12">
            <p className="text-gray-500">1 item selected.</p>
          </div>
          <div className="flex-auto w-32">
            {/* Todo display tabs */}
            <Tabs defaultValue="all" className="">
              <TabsList className="grid w-full grid-cols-3 space-x-2 bg-inherit">
                <TabsTrigger value="all" className="border border-white">
                  all
                </TabsTrigger>
                <TabsTrigger value="active" className="border border-white">
                  active
                </TabsTrigger>
                <TabsTrigger value="done" className="border border-white">
                  done
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
          {/* Button to delete selected items */}
          <div className="flex-auto w-12 text-end">
            <Button className="bg-destructive">Delete all</Button>
          </div>
        </div>
      </main>
      {/* Footer */}
      <footer></footer>
    </div>
  );
}
