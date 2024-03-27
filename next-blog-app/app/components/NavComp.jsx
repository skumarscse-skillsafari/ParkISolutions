"use client";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const NavComp = () => {
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    async function initProviders() {
      const allProviders = await getProviders();
      setProviders(allProviders);
    }
    initProviders();
  }, []);
  // console.log(providers);
  return (
    <Navbar bg="primary" data-bs-theme="dark">
      <Container>
        <Link className="btn btn-primary" href="/" style={{ fontSize: "22px" }}>
          BLOG APP
        </Link>
        <Nav>
          {session ? (
            <>
              <Link className="btn btn-primary" href="/post/new">
                Create Post
              </Link>

              <button className="btn btn-primary" onClick={signOut}>
                Signout
              </button>

              <Link className="btn btn-primary" href="/profile">
                Profile
              </Link>
            </>
          ) : (
            <button
              className="btn btn-primary"
              onClick={() => signIn(providers.google.id)}
            >
              Sign In
            </button>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavComp;
