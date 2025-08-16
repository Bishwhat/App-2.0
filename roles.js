
// roles.js - basic role-based access control

const roles = {
  admin: { canManageRoles: true, canViewAll: true },
  OIC: { canViewAll: true },
  NCOIC: { canViewAll: true },
  teamChief: { canViewAll: true },
  teamMember: { canViewAll: true }
};

// current user (this would be assigned dynamically in real app)
let currentUserRole = "teamMember";

function hasPermission(role, permission) {
  return roles[role] && roles[role][permission] === true;
}

// Example usage:
if (hasPermission(currentUserRole, "canManageRoles")) {
  console.log("You can manage roles.");
} else {
  console.log("You cannot manage roles.");
}
