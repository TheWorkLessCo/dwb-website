import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const cardVariants = cva(
  'flex flex-col gap-6 rounded-xl border py-6 transition-all duration-300',
  {
    variants: {
      variant: {
        default: 'bg-card text-card-foreground shadow-sm',
        glass: 'bg-white/60 backdrop-blur-xl border-white/50 shadow-[0_8px_32px_rgba(0,21,46,0.08)] hover:shadow-[0_16px_48px_rgba(0,21,46,0.12)] hover:bg-white/70',
        elevated: 'bg-card text-card-foreground shadow-[0_4px_6px_-1px_rgba(0,21,46,0.04),0_2px_4px_-2px_rgba(0,21,46,0.03)] hover:shadow-[0_20px_25px_-5px_rgba(4,155,242,0.08),0_8px_10px_-6px_rgba(4,155,242,0.04)] hover:-translate-y-1',
        subtle: 'bg-card text-card-foreground border-slate-100 shadow-[0_1px_3px_rgba(0,21,46,0.03)]',
        ghost: 'bg-transparent border-transparent shadow-none',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

interface CardProps extends React.ComponentProps<'div'>, VariantProps<typeof cardVariants> {}

function Card({ className, variant, ...props }: CardProps) {
  return (
    <div
      data-slot="card"
      className={cn(cardVariants({ variant }), className)}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        '@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6',
        className,
      )}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-title"
      className={cn('leading-none font-semibold', className)}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-description"
      className={cn('text-muted-foreground text-sm', className)}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        'col-start-2 row-span-2 row-start-1 self-start justify-self-end',
        className,
      )}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-content"
      className={cn('px-6', className)}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-footer"
      className={cn('flex items-center px-6 [.border-t]:pt-6', className)}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}
