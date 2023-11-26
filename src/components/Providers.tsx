import { AuthContextProvider } from "@/context/AuthContextProvider";
import { ModalContextProvider } from "@/context/ModalContextProvider";

interface ProvidersProps {
	children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
	return (
		<AuthContextProvider>
			<ModalContextProvider>{children}</ModalContextProvider>
		</AuthContextProvider>
	);
}
