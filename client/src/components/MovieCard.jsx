/* eslint-disable react/prop-types */
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Rating } from "@mui/material";

export default function MovieCard({
	id,
	title,
	description,
	posterUrl,
	rating,
}) {
	return (
		<Card sx={{ maxWidth: 350 }} className="pt-4">
			<CardActionArea>
				<div className="w-full h-[350px] blur-sm opacity-90">
					<img
						src={posterUrl}
						className="w-full h-full object-cover"
					/>
				</div>
				<CardMedia
					className="absolute top-0 h-[350px] object-contain z-10"
					component="img"
					image={posterUrl}
					alt={title + id}
				/>

				<CardContent>
					<Typography
						gutterBottom
						variant="h6"
						component="div"
						className="text-emerald-700 font-poppings font-medium"
					>
						{title}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						{description}
					</Typography>
					<div className="pt-3">
						<Rating name="read-only" value={rating} readOnly />
					</div>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}
