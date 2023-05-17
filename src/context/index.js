import { UserProvider } from "./UserContext";
import { SearchProvider } from "./SearchContext";
import { FavoritesProvider } from "./FavoritesContext";

function StateProvider(props) {
    return(
        <UserProvider>
            <FavoritesProvider>
                <SearchProvider>
                    {props.children}
                </SearchProvider>
            </FavoritesProvider>
        </UserProvider>
    )
}

export default StateProvider;