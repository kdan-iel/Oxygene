import * as React from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "./dialog";
import { X } from "lucide-react";

interface BlogPostModalProps {
  post: {
    title: string;
    description?: string;
    content: React.ReactNode;
    image?: string;
  };
  children: React.ReactNode;
  className?: string;
}


export function BlogPostModal({
  post,
  children,
  className,
}: BlogPostModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent
        className={`w-full max-w-2xl md:max-w-4xl lg:max-w-5xl h-[90vh] p-0 overflow-hidden flex flex-col ${className} custom-modal-width`}
        style={{ maxHeight: '90vh' }}
      >
        {/* Close X icon */}
        <DialogClose asChild>
          <button
            className="absolute top-4 right-4 z-10 text-gray-700 hover:text-primary transition-colors"
            aria-label="Fermer"
          >
            <X className="w-6 h-6" />
          </button>
        </DialogClose>
        {post.image && (
          <div className="w-full h-64 overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <div className="p-8 overflow-y-auto flex-1">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold mb-2">{post.title}</DialogTitle>
            {post.description && (
              <DialogDescription className="mb-4 text-lg text-gray-600">
                {post.description}
              </DialogDescription>
            )}
          </DialogHeader>
          <div className="prose max-w-none">{post.content}</div>
        </div>
      </DialogContent>
    </Dialog>
  );
}