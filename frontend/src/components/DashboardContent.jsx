import { useLocation, Link } from 'react-router-dom';
import { ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, Tooltip as RechartsTooltip, CartesianGrid } from 'recharts';
import { Clock, Info, ArrowRight } from 'lucide-react';

const COLORS = ['#6C8CF5', '#A3B4E9', '#4E6AA5', '#3A4E7A'];

export default function DashboardSection() {
  const { state } = useLocation();
  const data = state?.result;

  if (!data) {
    return (
      <section className="min-h-screen pt-32 pb-20 w-full px-6 flex flex-col items-center">
        <div className="glass-panel p-12 rounded-2xl max-w-lg w-full text-center border border-border shadow-2xl">
          <div className="w-20 h-20 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-8">
            <Info className="w-10 h-10 text-accent" />
          </div>
          <h2 className="text-3xl font-bold text-textPrimary mb-4">No Data Analyzed</h2>
          <p className="text-textSecondary mb-10 leading-relaxed font-medium">
            The dashboard is empty because no dataset has been uploaded for this session. Please upload a CSV/Excel file to see real-time segmentation.
          </p>
          <Link to="/upload" className="bg-accent text-background font-bold py-4 px-10 rounded-xl hover:bg-opacity-90 transition-all flex items-center justify-center gap-3 w-full shadow-lg shadow-accent/20">
            Go to Workspace <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    );
  }

  const pieData = Object.entries(data.distribution).map(([name, value]) => ({ name, value }));
  
  // Real-time metrics from the response
  const metrics = data.metrics;

  return (
    <section className="min-h-screen pt-32 pb-20 w-full px-6 flex flex-col items-center">
      <div className="max-w-[1200px] w-full mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="text-3xl font-bold text-textPrimary mb-2 font-sans tracking-tight">Segmentation Performance</h2>
          <p className="text-textSecondary text-base max-w-2xl font-medium">
            Detailed breakdown of your {metrics.Total_Customers.toLocaleString()} customers across behavior clusters.
          </p>
        </div>
        <div className="flex items-center gap-2 text-textSecondary text-xs font-bold uppercase tracking-widest bg-surface/50 px-4 py-2 rounded-full border border-border">
          <Clock className="w-4 h-4 text-accent" /> Live Results · Analysis Consistent
        </div>
      </div>

      <div className="w-full max-w-[1200px] grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Side: Segments */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          
          <div className="glass-panel p-8 rounded-2xl border border-border h-[420px] flex flex-col shadow-xl">
            <h3 className="text-xs font-bold uppercase tracking-widest text-textSecondary mb-6">Cluster Distribution</h3>
            <div className="flex-1 w-full min-h-0 relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    innerRadius={80}
                    outerRadius={110}
                    paddingAngle={5}
                    dataKey="value"
                    stroke="none"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <RechartsTooltip 
                    contentStyle={{ backgroundColor: '#151821', borderColor: '#232734', color: '#E8ECF1', borderRadius: '12px', border: '1px solid #303644' }}
                    itemStyle={{ color: '#E8ECF1' }}
                  />
                </PieChart>
              </ResponsiveContainer>
              
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <span className="text-4xl font-extrabold text-textPrimary">{metrics.Total_Customers.toLocaleString()}</span>
                <span className="text-xs font-bold text-textSecondary uppercase tracking-tighter">Individuals</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-y-3 mt-8">
              {pieData.map((entry, index) => (
                <div key={index} className="flex items-center gap-2 text-xs text-textSecondary font-bold">
                  <span className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[index % COLORS.length] }}></span>
                  {entry.name}
                </div>
              ))}
            </div>
          </div>

          <div className="glass-panel p-8 rounded-2xl border border-border flex flex-col gap-5 shadow-lg">
            <h3 className="text-xs font-bold uppercase tracking-widest text-textSecondary mb-2">Segmentation Summary</h3>
            <div className="flex flex-col gap-4">
              {pieData.map((s, i) => (
                <div key={i} className="flex justify-between items-center text-sm border-b border-border/30 pb-3 last:border-0 last:pb-0">
                  <span className="text-textPrimary font-semibold">{s.name}</span>
                  <div className="flex items-center gap-3">
                    <span className="text-textSecondary font-mono">{s.value.toLocaleString()}</span>
                    <span className="text-[10px] bg-accent/10 text-accent px-2 py-0.5 rounded-full font-bold">
                      {((s.value / metrics.Total_Customers) * 100).toFixed(1)}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Key Performance Metrics */}
        <div className="lg:col-span-7 flex flex-col gap-8">

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="glass-panel p-8 rounded-2xl border border-border shadow-md hover:border-accent/40 transition-colors">
              <p className="text-xs text-textSecondary font-bold uppercase tracking-widest mb-2">Avg. Recency</p>
              <div className="flex items-baseline gap-2">
                <p className="text-4xl font-extrabold text-textPrimary">{metrics.Avg_Recency}</p>
                <span className="text-textSecondary text-xs font-medium">days</span>
              </div>
              <p className="text-[10px] text-textSecondary/60 mt-2 italic font-medium">Time since last purchase across entire dataset</p>
            </div>

            <div className="glass-panel p-8 rounded-2xl border border-border shadow-md hover:border-accent/40 transition-colors">
              <p className="text-xs text-textSecondary font-bold uppercase tracking-widest mb-2">Avg. Monetary</p>
              <div className="flex items-baseline gap-2">
                <p className="text-4xl font-extrabold text-textPrimary">${metrics.Avg_Monetary.toLocaleString()}</p>
                <span className="text-textSecondary text-xs font-medium">spend</span>
              </div>
              <p className="text-[10px] text-textSecondary/60 mt-2 italic font-medium">Total spending divided by number of customers</p>
            </div>

            <div className="glass-panel p-8 rounded-2xl border border-border shadow-md hover:border-accent/40 transition-colors">
              <p className="text-xs text-textSecondary font-bold uppercase tracking-widest mb-2">Avg. Frequency</p>
              <div className="flex items-baseline gap-2">
                <p className="text-4xl font-extrabold text-textPrimary">{metrics.Avg_Frequency}</p>
                <span className="text-textSecondary text-xs font-medium">purchases</span>
              </div>
              <p className="text-[10px] text-textSecondary/60 mt-2 italic font-medium">Total count of successful transactions per user</p>
            </div>

            <div className="glass-panel p-8 rounded-2xl border border-border shadow-md bg-accent/5">
              <p className="text-xs text-accent font-bold uppercase tracking-widest mb-2">Active Target</p>
              <p className="text-xl font-bold text-textPrimary mb-1">Optimizing Retention</p>
              <p className="text-xs text-textSecondary font-medium leading-relaxed">System recommends focusing on "At Risk" segment for immediate conversion uplift.</p>
            </div>
          </div>
          
          {/* Sample Details */}
          <div className="glass-panel p-8 rounded-2xl border border-border flex-1 min-h-[350px] flex flex-col shadow-2xl">
              <h3 className="text-xs font-bold uppercase tracking-widest text-textSecondary mb-6">Customer Insights (Live Stream)</h3>
              <div className="overflow-hidden rounded-xl border border-border/50 bg-background/30">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="bg-surface/50 text-textSecondary border-b border-border">
                      <th className="p-4 font-bold">ID</th>
                      <th className="p-4 font-bold">Tier</th>
                      <th className="p-4 font-bold">Monetary</th>
                      <th className="p-4 font-bold">Recency</th>
                    </tr>
                  </thead>
                  <tbody className="text-textPrimary/80">
                    {data.scatter.slice(0, 6).map((item, idx) => (
                      <tr key={idx} className="border-b border-border/20 last:border-0 hover:bg-surface/30 transition-colors">
                        <td className="p-4 font-mono">#{item.CustomerID.toString().slice(-4)}</td>
                        <td className="p-4">
                          <span className="bg-accent/10 text-accent px-2 py-1 rounded text-[10px] font-bold">
                            {item.Tier}
                          </span>
                        </td>
                        <td className="p-4 font-semibold">${item.Monetary.toFixed(0)}</td>
                        <td className="p-4">{item.Recency}d</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-6 text-[11px] text-textSecondary font-medium italic">Showing 6 sample records from your recently analyzed {metrics.Total_Customers} entries.</p>
          </div>

        </div>
      </div>
    </section>
  );
}
