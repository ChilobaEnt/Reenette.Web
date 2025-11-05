import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import {
  BookOpen,
  Users,
  DollarSign,
  Calendar,
  TrendingUp,
  Award
} from 'lucide-react';
import { useDatabase } from '@/hooks/auth/useDatabase';
import { LoadingSpinner, ErrorMessage } from '@/components/ui/loading-error';
import { cn } from '@/lib/utils';

export function DashboardOverview() {
  const { loading, error, getDashboardStats } = useDatabase();
  const [stats, setStats] = useState({
    totalBookings: 0,
    totalUsers: 0,
    totalRevenue: 0,
    upcomingBookings: 0,
    popularTour: '',
    avgRating: 0
  });

  useEffect(() => {
    const loadStats = async () => {
      const data = await getDashboardStats();
      if (data) {
        setStats(data);
      }
    };
    loadStats();
  }, []);

  if (loading) return <LoadingSpinner size="lg" text="Loading dashboard..." />;
  if (error) return <ErrorMessage message={error} />;

  const statCards = [
    {
      title: 'Total Bookings',
      value: stats.totalBookings,
      icon: BookOpen,
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10'
    },
    {
      title: 'Total Users',
      value: stats.totalUsers,
      icon: Users,
      color: 'text-green-500',
      bgColor: 'bg-green-500/10'
    },
    {
      title: 'Total Revenue',
      value: `$${stats.totalRevenue.toFixed(2)}`,
      icon: DollarSign,
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-500/10'
    },
    {
      title: 'Upcoming Tours',
      value: stats.upcomingBookings,
      icon: Calendar,
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10'
    },
    {
      title: 'Most Popular Tour',
      value: stats.popularTour,
      icon: TrendingUp,
      color: 'text-pink-500',
      bgColor: 'bg-pink-500/10'
    },
    {
      title: 'Average Rating',
      value: `${stats.avgRating.toFixed(1)} / 5.0`,
      icon: Award,
      color: 'text-orange-500',
      bgColor: 'bg-orange-500/10'
    }
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard Overview</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {statCards.map((stat) => (
          <Card key={stat.title} className="p-6">
            <div className="flex items-center space-x-4">
              <div className={cn(
                "p-3 rounded-full",
                stat.bgColor
              )}>
                <stat.icon className={cn(
                  "h-6 w-6",
                  stat.color
                )} />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </p>
                <h3 className="text-2xl font-bold">
                  {stat.value}
                </h3>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Recent Activity */}
      <Card className="p-6">
        <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
        {/* Add recent activity list here */}
      </Card>
    </div>
  );
}