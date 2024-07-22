import { Card as UiCard, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from '@/components/ui/card';

export interface CardProps {
    title?: any;
    description?: any;
    children?: any;
    footer?: any
}

export function Card({
    title,
    description,
    children,
    footer
}: CardProps) {
    return (
        <UiCard>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>{children}</CardContent>
            <CardFooter>
                {footer}
            </CardFooter>
        </UiCard>
    )
}