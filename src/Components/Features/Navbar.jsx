function Navbar({user, onLogout,pendingCount}) {
    return(
        <nav>
            <h1>Task Manager</h1>
            <div>
                {user ? (
                    <>
                    <span>{user.username}</span>
                    <span>Pending Tasks: {pendingCount}</span>
                    <button onClick={onLogout}>Logout</button>
                    </>
                ) : (
                    <span>Please log in</span>
                )}
            </div>
        </nav>
    )

}

export default Navbar;



