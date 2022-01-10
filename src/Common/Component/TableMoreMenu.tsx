import { useRef, useState } from "react";
import editFill from "@mui/icons-material/AutoFixHigh";
import { Link as RouterLink } from "react-router-dom";
import trash2Outline from "@mui/icons-material/DeleteOutlineOutlined";
import moreVerticalFill from "@mui/icons-material/MoreVert";
// material
import {
  Menu,
  MenuItem,
  IconButton,
  ListItemIcon,
  ListItemText,
  Box,
} from "@mui/material";

// ----------------------------------------------------------------------

export default function SubjectMoreMenu() {
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <IconButton ref={ref} onClick={() => setIsOpen(true)}>
        <Box
          component={moreVerticalFill}
          sx={{ color: "black", width: "20", height: "20" }}
        />
      </IconButton>

      <Menu
        open={isOpen}
        anchorEl={ref.current}
        onClose={() => setIsOpen(false)}
        PaperProps={{
          sx: { width: 200, maxWidth: "100%" },
        }}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <MenuItem sx={{ color: "text.secondary" }}>
          <ListItemIcon>
            <Box
              component={trash2Outline}
              sx={{ color: "black", width: "24", height: "24" }}
            />
          </ListItemIcon>
          <ListItemText
            primary="Delete"
            primaryTypographyProps={{ variant: "body2" }}
          />
        </MenuItem>

        <MenuItem
          component={RouterLink}
          to="#"
          sx={{ color: "text.secondary" }}
        >
          <ListItemIcon>
            <Box
              component={editFill}
              sx={{ color: "black", width: "24", height: "24" }}
            />
          </ListItemIcon>
          <ListItemText
            primary="Edit"
            primaryTypographyProps={{ variant: "body2" }}
          />
        </MenuItem>
      </Menu>
    </>
  );
}
