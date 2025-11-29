import React from 'react';
import {
    Avatar,
    Box,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Chip,
    Container,
    Grid,
    InputAdornment,
    Pagination,
    Stack,
    TextField,
    Typography,
    Skeleton,
    useTheme
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

type Author = {
    name: string;
    avatarUrl: string;
};

type Post = {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    imageUrl: string;
    dateISO: string;
    tags: string[];
    readingMinutes: number;
    author: Author;
};

const ALL_POSTS: Post[] = [
    {
        id: '1',
        slug: 'kickstarting-your-digital-transformation',
        title: 'Kickstarting Your Digital Transformation',
        excerpt: 'A practical roadmap to modernize your stack without disrupting operations.',
        imageUrl: 'https://picsum.photos/id/1011/900/600',
        dateISO: '2024-12-01',
        tags: ['Strategy', 'Engineering'],
        readingMinutes: 7,
        author: { name: 'Ada Lovelace', avatarUrl: 'https://i.pravatar.cc/100?img=1' }
    },
    {
        id: '2',
        slug: 'design-systems-that-scale',
        title: 'Design Systems That Scale',
        excerpt: 'How to build design systems that empower teams and ship faster.',
        imageUrl: 'https://picsum.photos/id/1005/900/600',
        dateISO: '2025-01-10',
        tags: ['Design', 'UI'],
        readingMinutes: 6,
        author: { name: 'Grace Hopper', avatarUrl: 'https://i.pravatar.cc/100?img=2' }
    },
    {
        id: '3',
        slug: 'measuring-ux-without-guesswork',
        title: 'Measuring UX Without Guesswork',
        excerpt: 'Turn user feedback and analytics into actionable UX metrics.',
        imageUrl: 'https://picsum.photos/id/1036/900/600',
        dateISO: '2025-02-02',
        tags: ['UX', 'Analytics'],
        readingMinutes: 8,
        author: { name: 'Alan Turing', avatarUrl: 'https://i.pravatar.cc/100?img=3' }
    },
    {
        id: '4',
        slug: 'shipping-faster-with-ci-cd',
        title: 'Shipping Faster with CI/CD',
        excerpt: 'A lightweight CI pipeline that grows with your team.',
        imageUrl: 'https://picsum.photos/id/1043/900/600',
        dateISO: '2025-02-20',
        tags: ['DevOps', 'Engineering'],
        readingMinutes: 5,
        author: { name: 'Linus Torvalds', avatarUrl: 'https://i.pravatar.cc/100?img=4' }
    },
    {
        id: '5',
        slug: 'accessibility-by-default',
        title: 'Accessibility by Default',
        excerpt: 'Bake accessibility into your process from day one.',
        imageUrl: 'https://picsum.photos/id/1050/900/600',
        dateISO: '2025-03-01',
        tags: ['Accessibility', 'UI'],
        readingMinutes: 9,
        author: { name: 'Margaret Hamilton', avatarUrl: 'https://i.pravatar.cc/100?img=5' }
    },
    {
        id: '6',
        slug: 'clean-apis-for-long-term-success',
        title: 'Clean APIs for Long-Term Success',
        excerpt: 'Principles for designing APIs that are easy to use and evolve.',
        imageUrl: 'https://picsum.photos/id/1057/900/600',
        dateISO: '2025-03-12',
        tags: ['APIs', 'Architecture'],
        readingMinutes: 7,
        author: { name: 'Donald Knuth', avatarUrl: 'https://i.pravatar.cc/100?img=6' }
    },
    {
        id: '7',
        slug: 'real-world-performance-wins',
        title: 'Real-World Performance Wins',
        excerpt: 'Simple changes that deliver big performance gains.',
        imageUrl: 'https://picsum.photos/id/1062/900/600',
        dateISO: '2025-03-22',
        tags: ['Performance', 'Web'],
        readingMinutes: 6,
        author: { name: 'Barbara Liskov', avatarUrl: 'https://i.pravatar.cc/100?img=7' }
    },
    {
        id: '8',
        slug: 'data-privacy-for-builders',
        title: 'Data Privacy for Builders',
        excerpt: 'Practical steps to safeguard user data in modern apps.',
        imageUrl: 'https://picsum.photos/id/1074/900/600',
        dateISO: '2025-04-01',
        tags: ['Security', 'Privacy'],
        readingMinutes: 8,
        author: { name: 'Tim Berners-Lee', avatarUrl: 'https://i.pravatar.cc/100?img=8' }
    },
    {
        id: '9',
        slug: 'from-idea-to-mvp-in-30-days',
        title: 'From Idea to MVP in 30 Days',
        excerpt: 'A step-by-step guide to validate, build, and launch quickly.',
        imageUrl: 'https://picsum.photos/id/1084/900/600',
        dateISO: '2025-04-09',
        tags: ['Product', 'Startup'],
        readingMinutes: 10,
        author: { name: 'Guido van Rossum', avatarUrl: 'https://i.pravatar.cc/100?img=9' }
    }
];

function formatDate(iso: string) {
    return new Date(iso).toLocaleDateString(undefined, {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    });
}

export default function Blog() {
    // @ts-ignore
    const theme = useTheme();
    const [loading, setLoading] = React.useState(true);
    const [posts, setPosts] = React.useState<Post[]>([]);
    const [query, setQuery] = React.useState('');
    const [selectedTags, setSelectedTags] = React.useState<string[]>([]);
    const [page, setPage] = React.useState(1);

    const pageSize = 9;

    React.useEffect(() => {
        // Simulate API request
        const t = setTimeout(() => {
            setPosts(ALL_POSTS);
            setLoading(false);
        }, 500);
        return () => clearTimeout(t);
    }, []);

    const allTags = React.useMemo(
        () =>
            Array.from(new Set(ALL_POSTS.flatMap((p) => p.tags))).sort((a, b) =>
                a.localeCompare(b)
            ),
        []
    );

    const filtered = React.useMemo(() => {
        const q = query.trim().toLowerCase();
        let list = posts.filter((p) => {
            const matchesQuery =
                !q ||
                p.title.toLowerCase().includes(q) ||
                p.excerpt.toLowerCase().includes(q) ||
                p.tags.some((t) => t.toLowerCase().includes(q));
            const matchesTags =
                selectedTags.length === 0 ||
                selectedTags.every((t) => p.tags.includes(t));
            return matchesQuery && matchesTags;
        });
        // sort newest first
        list = list.sort(
            (a, b) => +new Date(b.dateISO) - +new Date(a.dateISO)
        );
        return list;
    }, [posts, query, selectedTags]);

    const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
    const paged = React.useMemo(() => {
        const start = (page - 1) * pageSize;
        return filtered.slice(start, start + pageSize);
    }, [filtered, page]);

    React.useEffect(() => {
        // Reset to first page when filters change
        setPage(1);
    }, [query, selectedTags]);

    const toggleTag = (tag: string) => {
        setSelectedTags((prev) =>
            prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
        );
    };

    return (
        <main>
            <Box sx={{ py: { xs: 4, md: 8 } }}>
                <Container maxWidth="lg">
                    <Stack spacing={3}>
                        <Typography variant="h3" fontWeight={800}>
                            Blog
                        </Typography>
                        <Typography color="text.secondary">
                            Insights, tutorials, and stories from our team.
                        </Typography>

                        <TextField
                            fullWidth
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search articles, tags, topics…"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon color="action" />
                                    </InputAdornment>
                                )
                            }}
                        />

                        <Box
                            sx={{
                                display: 'flex',
                                gap: 1,
                                flexWrap: 'nowrap',
                                overflowX: 'auto',
                                py: 1,
                                '&::-webkit-scrollbar': { display: 'none' }
                            }}
                        >
                            {allTags.map((tag) => {
                                const selected = selectedTags.includes(tag);
                                return (
                                    <Chip
                                        key={tag}
                                        label={tag}
                                        clickable
                                        color={selected ? 'primary' : 'default'}
                                        onClick={() => toggleTag(tag)}
                                        sx={{ flex: '0 0 auto' }}
                                    />
                                );
                            })}
                        </Box>

                        {loading ? (
                            <Grid container spacing={2}>
                                {Array.from({ length: 6 }).map((_, i) => (
                                    <Grid key={i} >
                                        <Card sx={{ height: '100%' }}>
                                            <Skeleton variant="rectangular" height={180} />
                                            <CardContent>
                                                <Skeleton width="80%" />
                                                <Skeleton width="60%" />
                                                <Stack direction="row" spacing={1} mt={1}>
                                                    <Skeleton variant="rounded" width={60} height={28} />
                                                    <Skeleton variant="rounded" width={60} height={28} />
                                                </Stack>
                                                <Stack direction="row" spacing={1} alignItems="center" mt={2}>
                                                    <Skeleton variant="circular" width={28} height={28} />
                                                    <Skeleton width={120} />
                                                </Stack>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                ))}
                            </Grid>
                        ) : filtered.length === 0 ? (
                            <Box sx={{ py: 6, textAlign: 'center' }}>
                                <Typography variant="h6" fontWeight={700}>
                                    No articles found
                                </Typography>
                                <Typography color="text.secondary">
                                    Try a different search or clear tag filters.
                                </Typography>
                            </Box>
                        ) : (
                            <>
                                <Grid container spacing={2}>
                                    {paged.map((post) => (
                                        <Grid key={post.id} >
                                            <Card
                                                sx={{
                                                    height: '100%',
                                                    display: 'flex',
                                                    flexDirection: 'column'
                                                }}
                                                elevation={1}
                                            >
                                                <CardActionArea
                                                    component={RouterLink}
                                                    to={`/blog/${post.slug}`}
                                                    sx={{ alignItems: 'stretch' }}
                                                >
                                                    <CardMedia
                                                        component="img"
                                                        height="180"
                                                        image={post.imageUrl}
                                                        alt={post.title}
                                                        loading="lazy"
                                                        sx={{ objectFit: 'cover' }}
                                                    />
                                                    <CardContent>
                                                        <Stack spacing={1.2}>
                                                            <Typography variant="h6" fontWeight={700}>
                                                                {post.title}
                                                            </Typography>
                                                            <Typography
                                                                variant="body2"
                                                                color="text.secondary"
                                                                sx={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}
                                                            >
                                                                {post.excerpt}
                                                            </Typography>
                                                            <Stack direction="row" spacing={1} flexWrap="wrap">
                                                                {post.tags.slice(0, 3).map((t) => (
                                                                    <Chip key={t} label={t} size="small" />
                                                                ))}
                                                            </Stack>
                                                            <Stack direction="row" spacing={1.5} alignItems="center" sx={{ pt: 0.5 }}>
                                                                <Avatar src={post.author.avatarUrl} alt={post.author.name} sx={{ width: 28, height: 28 }} />
                                                                <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                                                                    {post.author.name}
                                                                </Typography>
                                                                <Typography variant="caption" sx={{ color: 'text.secondary', display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                                                    <CalendarTodayIcon sx={{ fontSize: 14 }} /> {formatDate(post.dateISO)}
                                                                </Typography>
                                                                <Typography variant="caption" sx={{ color: 'text.secondary', display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                                                    <AccessTimeIcon sx={{ fontSize: 14 }} /> {post.readingMinutes} min read
                                                                </Typography>
                                                            </Stack>
                                                        </Stack>
                                                    </CardContent>
                                                </CardActionArea>
                                            </Card>
                                        </Grid>
                                    ))}
                                </Grid>

                                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                                    <Pagination
                                        page={page}
                                        count={totalPages}
                                        onChange={(_, p) => setPage(p)}
                                        color="primary"
                                        shape="rounded"
                                    />
                                </Box>
                            </>
                        )}
                    </Stack>
                </Container>
            </Box>
        </main>
    );
}