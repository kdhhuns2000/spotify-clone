import "./globals.css";
import { Figtree } from "next/font/google";

import Sidebar from "@/components/Sidebar";
import SupabaseProvider from "@/providers/SupabaseProvider";
import UserProvier from "@/providers/UserProvider";
import ModalProvider from "@/providers/ModalProvider";
import ToasterProvider from "@/providers/ToasterProvider";
import getSongsByUserId from "@/actions/getSongsByUserId";
import Player from "@/components/Player";

const font = Figtree({ subsets: ["latin"] });

export const metadata = {
	title: "Spotify Clone",
	description: "Listen to music!",
};

export const revalidate = 0;

export default async function RootLayout({ 
	children,
}: {
	children: React.ReactNode;
}) {
	const userSongs = await getSongsByUserId();

	return (
		<html lang="en">
			<body className={font.className}>
				<ToasterProvider />
        <SupabaseProvider>
          <UserProvier>
						<ModalProvider />
            <Sidebar songs={userSongs}>
              {children}
            </Sidebar>
						<Player />
          </UserProvier>
        </SupabaseProvider>
			</body>
		</html>
	);
}
