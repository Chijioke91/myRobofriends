import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import { setSearchTerm, fetchRobots } from '../actions';
import Header from '../components/Header';

const App = ({ term, setSearchTerm, fetchRobots, robots, isLoading }) => {
  useEffect(() => {
    fetchRobots();
  }, [fetchRobots]);

  const onSearchChange = e => {
    setSearchTerm(e.target.value);
  };

  const filteredRobots = robots.filter(robot =>
    robot.name.toLowerCase().includes(term.toLowerCase())
  );

  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <div className="tc">
      <Header />
      <SearchBox onSearchChange={onSearchChange} />
      <Scroll>
        <ErrorBoundary>
          <CardList robots={filteredRobots} />
        </ErrorBoundary>
      </Scroll>
    </div>
  );
};

const mapStateToProps = state => ({
  term: state.searchRobots.term,
  robots: state.fetchRobots.robots,
  isLoading: state.fetchRobots.isLoading
});

export default connect(mapStateToProps, { setSearchTerm, fetchRobots })(App);
