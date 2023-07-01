import "./globals.css";
import { Figtree } from "next/font/google";

import Sidebar from "@/components/Sidebar";
import SupabaseProvider from "@/providers/SupabaseProvider";
import UserProvier from "@/providers/UserProvider";
import ModalProvider from "@/providers/ModalProvider";
import ToasterProvider from "@/providers/ToasterProvider";

const font = Figtree({ subsets: ["latin"] });

export const metadata = {
	title: "Spotify Clone",
	description: "Listen to music!",
};

export default function RootLayout({ 
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={font.className}>
				<ToasterProvider />
        <SupabaseProvider>
          <UserProvier>
						<ModalProvider />
            <Sidebar>
              {children}
            </Sidebar>
          </UserProvier>
        </SupabaseProvider>
			</body>
		</html>
	);
}
