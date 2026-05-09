function Navbar({user, onLogout,pendingCount}) {
    return(
        <Nav>
            <h1>Task Manager</h1>
            <div>
                {user ? (
                    <>
                    <span>{user.name}</span>
                    <span>Pending Tasks: {pendingCount}</span>
                    <button onClick={onLogout}>Logout</button>
                    </>
                ) : (
                    <span>Please log in</span>
                )}
            </div>
        </Nav>
    )

}

export default Navbar;



