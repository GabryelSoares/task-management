export const BreakpointSizes = {
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1140,
};

export const breakAt = (size: number) => `@media (min-width: ${size}px)`;

export interface MaxWidthProps {
    size?: 'sm' | 'md' | 'lg' | 'xl'
}
export const getMaxWidth = ({ size = 'xl' }: MaxWidthProps): number => {
    switch(size) {
        case 'sm':
            return BreakpointSizes.sm
        case 'md':
            return BreakpointSizes.md
        case 'lg':
            return BreakpointSizes.lg
        case 'xl':
            return BreakpointSizes.xl
        default:
            return 1140;
    }
};

