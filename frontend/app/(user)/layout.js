'use client';
import AppBar from "./Appbar"
import {SessionProvider} from "next-auth/react";
export default function UserLayout({ children,session }) {
return (
 <>   
<SessionProvider session={session}>
<AppBar/>
{children}
</SessionProvider>
</>
)
}
