"use client"

import { Button } from "@/components/ui/button"
import { Edit3, Loader2, Trash2 } from "lucide-react"
import { cn } from "@/lib/utils"
import type { Todo } from "@/types"
import { Checkbox } from "@/components/ui/checkbox"

interface TodoItemProps {
    todo: Todo
    deleteTodoLoading?: boolean
    onToggle: (id: string) => void
    onEdit: (todo: Todo) => void
    onDelete: (id: string) => void
}

export function TodoItem({ todo, deleteTodoLoading, onToggle, onEdit, onDelete }: TodoItemProps) {
    return (
        <div className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border">
            <Checkbox
                checked={todo.completed}
                onCheckedChange={() => onToggle(todo.id)}
                className="rounded-full w-6 h-6 border-2 border-primary data-[state=checked]:bg-primary data-[state=checked]:border-primary"
            />

            <div className="flex-1 flex flex-col">
                <span className={cn("text-foreground", todo.completed && "line-through text-muted-foreground")}>
                    {todo.title}
                </span>
                <span
                    className={cn(
                        "text-foreground text-xs max-w-md text-wrap",
                        todo.completed && "line-through text-muted-foreground",
                    )}
                >
                    {todo.description}
                </span>
            </div>

            <div className="flex gap-2">
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => onEdit(todo)}
                    className="h-8 w-8 text-muted-foreground hover:text-primary"
                >
                    <Edit3 className="h-4 w-4" />
                </Button>
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => onDelete(todo.id)}
                    className="h-8 w-8 text-muted-foreground hover:text-destructive"
                >
                    {deleteTodoLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Trash2 className="h-4 w-4" />}
                </Button>
            </div>
        </div>
    )
}
