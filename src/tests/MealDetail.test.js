import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useDispatch, useSelector } from 'react-redux';
import MealDetail from '../components/MealDetail';
import { fetchDetailsAndRecommendations } from '../redux/actions';

// Falta Testar a linha 15

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

jest.mock('../redux/actions', () => ({
  fetchDetailsAndRecommendations: jest.fn(),
}));

describe('MealDetail', () => {
  const dispatch = jest.fn();
  const mockUseDispatch = useDispatch;
  const mockUseSelector = useSelector;
  const mockFetchDetailsAndRecommendations = fetchDetailsAndRecommendations;

  beforeEach(() => {
    mockUseDispatch.mockReturnValue(dispatch);
    mockUseSelector.mockReturnValue({
      details: {
        strMealThumb: 'meal-thumbnail.jpg',
        strMeal: 'Meal Name',
        strCategory: 'Meal Category',
        strInstructions: 'Meal Instructions',
        strYoutube: 'https://www.youtube.com/watch?v=abc123',
        strIngredient1: 'Ingredient 1',
        strIngredient2: 'Ingredient 2',
        strMeasure1: 'Measure 1',
        strMeasure2: 'Measure 2',
      },
      recommendations: [
        { id: 1, name: 'Recommendation 1' },
        { id: 2, name: 'Recommendation 2' },
      ],
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Renderiza o MealDetail', () => {
    render(<MealDetail id="123" />);
    expect(screen.getByTestId('recipe-photo')).toBeInTheDocument();
    expect(screen.getByTestId('recipe-title')).toBeInTheDocument();
    expect(screen.getByTestId('recipe-category')).toBeInTheDocument();
    expect(screen.getByTestId('instructions')).toBeInTheDocument();
    expect(screen.getByTestId('video')).toBeInTheDocument();
    expect(screen.getByTestId('ingredient-name-and-measure')).toBeInTheDocument();
    expect(screen.getByTestId('video')).toHaveAttribute('src', 'https://www.youtube.com/watch?v=abc123');
    expect(screen.getAllByTestId('recommendation-card')).toHaveLength(2);
  });

  it('Faz o fetch', () => {
    render(<MealDetail id="123" />);
    expect(mockFetchDetailsAndRecommendations).toHaveBeenCalledWith('https://www.themealdb.com/api/json/v1/1/lookup.php?i=123');
    expect(dispatch).toHaveBeenCalledWith(mockFetchDetailsAndRecommendations('https://www.themealdb.com/api/json/v1/1/lookup.php?i=123'));
  });

  it('Renderiza a lista de ingredientes', () => {
    render(<MealDetail id="123" />);
    expect(screen.getByText('Ingredient 1 - Measure 1')).toBeInTheDocument();
    expect(screen.getByText('Ingredient 2 - Measure 2')).toBeInTheDocument();
  });

  it('StartRecipeBtn', () => {
    render(<MealDetail id="123" />);
    const startButton = screen.getByTestId('start-recipe-button');
    userEvent.click(startButton);
    expect(dispatch).toHaveBeenCalledWith({ type: 'START_RECIPE', payload: { id: '123' } });
  });
});
