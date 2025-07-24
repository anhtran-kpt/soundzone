import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Music4Icon, PenBoxIcon } from "lucide-react";
import { CldImage } from "next-cloudinary";

interface PlaylistDialogProps {
  title: string;
  description?: string | null;
  coverPublicId?: string | null;
}

export const PlaylistDialog = ({
  title,
  description,
  coverPublicId,
}: PlaylistDialogProps) => {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <h2 className="font-bold text-5xl mt-1 mb-4">{title}</h2>
        </DialogTrigger>
        <DialogContent className="">
          <DialogHeader>
            <DialogTitle>Edit playlist</DialogTitle>
          </DialogHeader>
          <div className="flex items-stretch gap-4">
            <div className="relative size-48 rounded-lg overflow-hidden">
              {coverPublicId ? (
                <CldImage
                  src={coverPublicId}
                  alt={title}
                  fill
                  sizes="192px"
                  className="object-cover rounded-lg"
                  priority
                />
              ) : (
                <div className="bg-muted/70 inset-0 absolute rounded-lg group">
                  <Music4Icon className="size-12 stroke-current absolute top-1/2 left-1/2 -translate-1/2 group-hover:hidden" />
                  <PenBoxIcon className="size-12 stroke-current absolute top-1/2 left-1/2 -translate-1/2 hidden group-hover:block" />
                </div>
              )}
            </div>
            <div className="grid grow gap-4">
              <div className="grid gap-3">
                <Label htmlFor="title">Title</Label>
                <Input id="title" name="title" defaultValue={title} />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  placeholder="Add an optional description"
                  defaultValue={description ?? ""}
                />
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
};
