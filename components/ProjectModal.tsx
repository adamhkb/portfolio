import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Stack,
  Chip,
} from '@mui/material';

export default function ProjectModal({ open, handleClose, project }: any) {
  if (!project) return null;

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
      <DialogTitle>{project.title}</DialogTitle>
      <DialogContent>
        <img
          src={project.modalImage || project.cardImage}
          alt={project.title}
          style={{ width: '100%', height: 'auto', marginBottom: '1rem' }}
        />
        <Typography variant="body1" gutterBottom 

  sx={{ whiteSpace: 'pre-wrap' }}>
          {project.longDescription}
        </Typography>
        <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', mt: 1 }}>
          {project.tech.map((tech: string, index: number) => (
            <Chip key={index} label={tech} color="primary" />
          ))}
        </Stack>
      </DialogContent>
      <DialogActions>
        {project.github && (
          <Button href={project.github} target="_blank">
            GitHub
          </Button>
        )}
        {project.live && (
          <Button href={project.live} target="_blank">
            Live Demo
          </Button>
        )}
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}
