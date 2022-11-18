USE [1d]
GO

ALTER TABLE [dbo].[players] DROP CONSTRAINT [DF_players_createdAt]
GO

ALTER TABLE [dbo].[players] DROP CONSTRAINT [DF_players_seat]
GO

ALTER TABLE [dbo].[players] DROP CONSTRAINT [DF_players_tname]
GO

ALTER TABLE [dbo].[players] DROP CONSTRAINT [DF_players_stars]
GO

ALTER TABLE [dbo].[players] DROP CONSTRAINT [DF_players_status]
GO

ALTER TABLE [dbo].[players] DROP CONSTRAINT [DF_players_flag]
GO

/****** Object:  Table [dbo].[players]    Script Date: 11/14/2022 8:20:22 AM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[players]') AND type in (N'U'))
DROP TABLE [dbo].[players]
GO

/****** Object:  Table [dbo].[players]    Script Date: 11/14/2022 8:20:22 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[players](
	[id] [int] NOT NULL,
	[nick] [nvarchar](16) NOT NULL,
	[flag] [nvarchar](2) NULL,
	[profilePic] [nvarchar](255) NULL,
	[status] [int] NULL,
	[stars] [int] NULL,
	[tname] [nvarchar](16) NOT NULL,
	[seat] [int] NULL,
	[createdAt] [datetime2](7) NULL,
 CONSTRAINT [PK_players] PRIMARY KEY CLUSTERED 
(
	[nick] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[players] ADD  CONSTRAINT [DF_players_flag]  DEFAULT (N'US') FOR [flag]
GO

ALTER TABLE [dbo].[players] ADD  CONSTRAINT [DF_players_status]  DEFAULT ((0)) FOR [status]
GO

ALTER TABLE [dbo].[players] ADD  CONSTRAINT [DF_players_stars]  DEFAULT ((0)) FOR [stars]
GO

ALTER TABLE [dbo].[players] ADD  CONSTRAINT [DF_players_tname]  DEFAULT (N'#Lobby') FOR [tname]
GO

ALTER TABLE [dbo].[players] ADD  CONSTRAINT [DF_players_seat]  DEFAULT ((0)) FOR [seat]
GO

ALTER TABLE [dbo].[players] ADD  CONSTRAINT [DF_players_createdAt]  DEFAULT (getutcdate()) FOR [createdAt]
GO


