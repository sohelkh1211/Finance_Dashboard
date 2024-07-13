const initial_icon = "Home";

const changeIcon = (state = initial_icon, action) => {
    switch(action.type) {
        case 'change': return action.payload;
        default: return state;
    }
}

export default changeIcon;