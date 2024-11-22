import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import parse from 'html-react-parser';

interface NewsCardProps {
  title: string;
  content: string;
  image: string;
  href: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ title, content, image, href }) => {
  return (
    <Card sx={{width: '90%'}} >
      <CardMedia
        component="img"
        alt="news image"
        height="200"
        image={image}
      />
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2" color="black">
         {content}
        </Typography>
        <Typography variant="subtitle2" color="black">
         <a href={href} target='_blank' rel='noreferrer' >{href}</a>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default NewsCard;
