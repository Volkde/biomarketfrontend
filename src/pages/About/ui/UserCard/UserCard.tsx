import {
  Avatar,
  Link,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography
} from "@mui/material";

type UserCardProps = {
  fullName: string;
  avatar: string;
  role: string;
  description: string;
  url?: string;
};

function UserCard({ fullName, avatar, role, description, url }: UserCardProps) {
  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt={fullName} src={avatar} />
      </ListItemAvatar>
      <ListItemText
        primary={
          url ? (
            <Link href={url} target="_blank">
              {fullName}
            </Link>
          ) : (
            fullName
          )
        }
        secondary={
          <>
            <Typography
              component="span"
              variant="body2"
              sx={{ color: "text.primary", display: "inline" }}
            >
              {role}
            </Typography>
            <Typography
              component="span"
              variant="body2"
              sx={{ marginLeft: "5px" }}
            >
              {description}
            </Typography>
          </>
        }
      />
    </ListItem>
  );
}

export default UserCard;
