import { ReactNode, Component, ErrorInfo } from "react";

interface Props {
	children?: ReactNode;
    fallback: Readonly<ReactNode>;
}

interface State {
	hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false };
    }
  
    public static getDerivedStateFromError(_: Error): State {
        return { hasError: true };
    }
  
    public componentDidCatch(error: Error, info: ErrorInfo) {
        const { componentStack } = info;

        console.error("Uncaught error:", error, componentStack);
    }
  
    render() {
        if (this.state.hasError) {
            return this.props.fallback;
        }

        return this.props.children;
    }
}