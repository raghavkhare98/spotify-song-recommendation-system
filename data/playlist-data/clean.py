import os
import pandas as pd
import glob

def process_csv_files(input_folder, output_file, columns_to_remove):
    csv_files = glob.glob(os.path.join(input_folder, '*.csv'))
    
    if not csv_files:
        print(f"No CSV files found in {input_folder}")
        return
    
    dfs = []
    
    for csv_file in csv_files:
        try:
            df = pd.read_csv(csv_file)
            
            columns_to_drop = [col for col in columns_to_remove if col in df.columns]
            if columns_to_drop:
                df = df.drop(columns=columns_to_drop)
            
            dfs.append(df)
            print(f"Processed: {os.path.basename(csv_file)}")
            
        except Exception as e:
            print(f"Error processing {os.path.basename(csv_file)}: {str(e)}")

    if dfs:
        combined_df = pd.concat(dfs, ignore_index=True)
        combined_df.to_csv(output_file, index=False)
        print(f"Successfully created {output_file} with {len(combined_df)} rows")
    else:
        print("No data to combine after processing files")

input_folder = "/Users/raghavkhare/repos/spotify-recommendation/data/playlist-data"
output_file = "/Users/raghavkhare/repos/spotify-recommendation/data/new.csv"
columns_to_remove = ["Release Date", "Popularity", "Added By", "Added At", "Record Label", "Key", "Mode", "Time Signature"]

process_csv_files(input_folder, output_file, columns_to_remove)