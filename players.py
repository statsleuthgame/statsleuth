import pandas as pd

def get_nba_config_list():
    # Using FiveThirtyEight's historical dataset which covers all players by season
    url = "https://raw.githubusercontent.com/fivethirtyeight/data/master/nba-raptor/historical_RAPTOR_by_player.csv"
    
    print("Fetching NBA data from FiveThirtyEight...")
    df = pd.read_csv(url)
    
    # Group by player to find their first and last seasons
    player_stats = df.groupby('player_name').agg({
        'season': ['min', 'max']
    }).reset_index()
    player_stats.columns = ['name', 'start', 'last']
    
    # Filter for players active since 2000
    player_stats = player_stats[player_stats['last'] >= 2000]
    
    formatted_entries = []
    for _, row in player_stats.iterrows():
        name = row['name']
        start = int(row['start'])
        last = int(row['last'])
        
        # Logic: If they played in 2025 or 2026, label as 'Current'
        end_label = "Current" if last >= 2025 else str(last)
        
        formatted_entries.append(f'"{name} ({start}-{end_label})",')
    
    formatted_entries.sort()
    
    with open('nba_config_list.txt', 'w', encoding='utf-8') as f:
        f.write("\n".join(formatted_entries))
    
    print(f"Done! Created list with {len(formatted_entries)} NBA players.")

if __name__ == "__main__":
    get_nba_config_list()