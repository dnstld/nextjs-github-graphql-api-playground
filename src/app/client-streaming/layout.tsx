import { ApolloWrapper } from "../../ApolloWrapper";

export default function ClientStreamingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ApolloWrapper>{children}</ApolloWrapper>;
}
