import Sidebar from '@/components/Sidebar';
import InteractiveMap from '@/components/InteractiveMap';

const Map = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      
      <main className="flex-1 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-3xl font-bold neon-text">ТАКТИЧЕСКАЯ КАРТА</h1>
              <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent"></div>
            </div>
            <p className="text-muted-foreground font-mono text-sm">
              ИНТЕРАКТИВНАЯ КАРТА РОССИЙСКОЙ ФЕДЕРАЦИИ // РЕЖИМ СТРАТЕГИЧЕСКОГО ПЛАНИРОВАНИЯ
            </p>
          </div>

          <div className="h-[calc(100vh-12rem)]">
            <InteractiveMap />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Map;
