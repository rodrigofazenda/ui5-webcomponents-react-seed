import { useHasAccess } from '../../hooks/useHasAuthority';

const ComponentValidator = ({ allowedAuthorities, authorityKey, children }) => {
  const hasAccess = useHasAccess(allowedAuthorities, authorityKey)
  if (!hasAccess) {
    return null;
  }

  return children;
}


export default ComponentValidator;
