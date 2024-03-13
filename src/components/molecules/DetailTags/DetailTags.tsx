import { Box } from '@mui/material';
import { ReactNode } from 'react';
import ITag from '../../../utils/interfaces/ITag';
import './DetailTags.scss';

type DetailTagsProps = {
  icon: ReactNode;
  tags: ITag[];
};

const DetailTags = ({ icon, tags }: DetailTagsProps) => (
  <Box className="detail-tags">
    {icon}
    {tags.map((tag) => (
      <div key={tag.id}>{tag.tag}</div>
    ))}
  </Box>
);
export default DetailTags;
