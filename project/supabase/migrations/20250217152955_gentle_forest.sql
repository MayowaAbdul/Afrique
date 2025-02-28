/*
  # Admin Content Management Schema

  1. New Tables
    - `home_ads`
      - `id` (uuid, primary key)
      - `video_url` (text)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    
    - `news_items`
      - `id` (uuid, primary key)
      - `title` (text)
      - `date` (date)
      - `content` (text)
      - `image_url` (text)
      - `region` (text)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    
    - `tv_content`
      - `id` (uuid, primary key)
      - `title` (text)
      - `description` (text)
      - `image_url` (text)
      - `youtube_url` (text)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    
    - `event_ads`
      - `id` (uuid, primary key)
      - `video_url` (text)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated admin users
*/

-- Home Ads Table
CREATE TABLE IF NOT EXISTS home_ads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  video_url text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE home_ads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admins can manage home ads"
  ON home_ads
  FOR ALL
  TO authenticated
  USING (auth.role() = 'admin')
  WITH CHECK (auth.role() = 'admin');

-- News Items Table
CREATE TABLE IF NOT EXISTS news_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  date date NOT NULL DEFAULT CURRENT_DATE,
  content text NOT NULL,
  image_url text NOT NULL,
  region text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  CONSTRAINT valid_region CHECK (
    region IN ('West Africa', 'East Africa', 'North Africa', 'South Africa', 'Central Africa', 'Asia', 'Europe', 'America')
  )
);

ALTER TABLE news_items ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admins can manage news items"
  ON news_items
  FOR ALL
  TO authenticated
  USING (auth.role() = 'admin')
  WITH CHECK (auth.role() = 'admin');

-- TV Content Table
CREATE TABLE IF NOT EXISTS tv_content (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  image_url text NOT NULL,
  youtube_url text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE tv_content ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admins can manage TV content"
  ON tv_content
  FOR ALL
  TO authenticated
  USING (auth.role() = 'admin')
  WITH CHECK (auth.role() = 'admin');

-- Event Ads Table
CREATE TABLE IF NOT EXISTS event_ads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  video_url text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE event_ads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admins can manage event ads"
  ON event_ads
  FOR ALL
  TO authenticated
  USING (auth.role() = 'admin')
  WITH CHECK (auth.role() = 'admin');